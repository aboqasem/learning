use std::error::Error;
use std::fs;
use crate::config::Config;

pub fn run(config: &Config) -> Result<(), Box<dyn Error>> {
    let text = fs::read_to_string(&config.file_path)?;

    let results = if config.ignore_case {
        search_case_insensitive(&text, &config.query)
    } else {
        search(&text, &config.query)
    };

    results.iter().for_each(|line| {
        println!("{line}");
    });

    Ok(())
}

pub fn search<'a>(text: &'a str, query: &str) -> Vec<&'a str> {
    text.lines().filter(|line| line.contains(query)).collect()
}

pub fn search_case_insensitive<'a>(text: &'a str, query: &str) -> Vec<&'a str> {
    let query = query.to_lowercase();

    text.lines().filter(|line| line.to_lowercase().contains(&query)).collect()
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

    #[test]
    fn case_insensitive() {
        let text = "\
Rust:
safe, fast, productive.
Pick three.
Trust me.
";
        let query = "rUSt";

        assert_eq!(search_case_insensitive(text, query), vec!["Rust:", "Trust me."]);
    }
}
