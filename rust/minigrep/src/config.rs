use std::env;

pub struct Config {
    pub query: String,
    pub file_path: String,
    pub ignore_case: bool,
}

impl Config {
    pub fn build(mut args_iter: impl Iterator<Item=String>) -> Result<Config, &'static str> {
        let query = match args_iter.next() {
            Some(str) if !str.is_empty() => str,
            _ => return Err("`query` must be provided")
        };

        let file_path = match args_iter.next() {
            Some(str) if !str.is_empty() => str,
            _ => return Err("`file_path` must be provided")
        };

        if args_iter.next().is_some() {
            return Err("Unexpected number of arguments");
        }

        let ignore_case: bool = env::var("IGNORE_CASE").is_ok();

        Ok(Config { query, file_path, ignore_case })
    }
}
