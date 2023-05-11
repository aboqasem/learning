use std::{env, process};
use minigrep::{
    app::run,
    config::Config,
};

fn main() {
    let args: Vec<String> = env::args().collect();

    let config = Config::build(&args[1..])
        .unwrap_or_else(|e| {
            eprintln!("{e}");

            let binary = &args[0];
            eprintln!("Usage: {binary} <query> <file_path>");

            process::exit(1);
        });

    println!("Searching for \"{}\" in file \"{}\"...", config.query, config.file_path);

    if let Err(e) = run(&config) {
        eprintln!("Error: {e}");

        process::exit(1);
    }
}
