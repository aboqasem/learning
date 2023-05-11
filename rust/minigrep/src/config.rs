use std::env;

pub struct Config {
    pub query: String,
    pub file_path: String,
    pub ignore_case: bool,
}

impl Config {
    pub fn build(args: &[String]) -> Result<Config, &'static str> {
        const EXPECTED_NUM_ARGS: usize = 2;

        if args.len() != EXPECTED_NUM_ARGS {
            return Err("Invalid number of arguments");
        }

        let [query, file_path] = [&args[0], &args[1]];

        if query.is_empty() || file_path.is_empty() {
            return Err("Invalid arguments");
        }

        let ignore_case: bool = env::var("IGNORE_CASE").is_ok();

        Ok(Config {
            query: query.clone(),
            file_path: file_path.clone(),
            ignore_case
        })
    }
}
