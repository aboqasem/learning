use std::{env, process};
use minigrep::{
    app::run,
    config::Config,
};

fn main() {
    let mut args_iter = env::args();
    let binary = args_iter.next().unwrap();

    let config = Config::build(args_iter)
        .unwrap_or_else(|e| {
            eprintln!("{e}");

            eprintln!("Usage: {binary} <query> <file_path>");

            process::exit(1);
        });

    if let Err(e) = run(&config) {
        eprintln!("Error: {e}");

        process::exit(1);
    }
}
