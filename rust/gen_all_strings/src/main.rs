use std::env::args;
use std::fs::{create_dir_all, write};
use std::path::Path;

static mut OUT: String = String::new();

fn main() {
    let usage = args().nth(0).expect("No binary name!");
    let usage: &str = &format!(
        "Usage: {} <sentence length> <output file name> <string of char set>",
        usage
    );
    let sentence_len = args().nth(1).expect(usage);
    let sentence_len: u16 = sentence_len.parse().expect(usage);
    let file_path = args().nth(2).expect(usage);
    let file_path = Path::new(&file_path);
    let char_set = args().nth(3).expect(usage);

    all_strings(&char_set.chars().collect(), String::new(), sentence_len);

    create_dir_all(file_path.with_file_name("")).expect("Could not create directories!");
    unsafe {
        write(file_path, &OUT).expect("Could not write to output file!");
        print!("{}", OUT);
    }
}

fn all_strings(char_set: &Vec<char>, prefix: String, sentence_len: u16) {
    if sentence_len == 0 {
        unsafe {
            OUT = format!("{}{}\n", OUT, prefix);
        }
        return;
    }
    for i in 0..char_set.len() {
        let new_prefix = format!("{}{}", prefix, char_set[i]);
        all_strings(char_set, new_prefix, sentence_len - 1)
    }
}
