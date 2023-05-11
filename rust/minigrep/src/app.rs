use std::error::Error;
use std::fs;
use crate::config::Config;

pub fn run(config: &Config) -> Result<(), Box<dyn Error>> {
    let text = fs::read_to_string(&config.file_path)?;

    search(&text, &config.query).iter().for_each(|line| {
        println!("{line}");
    });

    Ok(())
}

pub fn search<'a>(text: &'a str, query: &str) -> Vec<&'a str> {
    text.lines().filter(|line| line.contains(query)).collect()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn one_result() {
        let text = "\
Rust:
safe, fast, productive.
Pick three.
";
        let query = "duct";

        assert_eq!(search(text, query), vec!["safe, fast, productive."]);
    }
}
