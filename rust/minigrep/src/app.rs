use std::error::Error;
use std::fs;
use crate::config::Config;

pub fn run(config: &Config) -> Result<(), Box<dyn Error>> {
    let _text = fs::read_to_string(&config.file_path)?;

    Ok(())
}
