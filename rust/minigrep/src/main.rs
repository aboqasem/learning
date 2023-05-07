use std::{env, fs, process};

fn main() {
    let args: Vec<String> = env::args().collect();

    let query = &args[1];
    let file_path = &args[2];

    println!("Searching for \"{query}\" in file \"{file_path}\"...");

    let text = fs::read_to_string(file_path)
        .unwrap_or_else(|e| {
            eprintln!("Unable to read file: {}", e);
            process::exit(1);
        });

    println!("With text:\n{text}");
}
