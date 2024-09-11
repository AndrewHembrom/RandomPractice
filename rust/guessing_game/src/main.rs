use std::io;
use std::cmp::Ordering;
use rand::Rng;

fn main() {
    println!("Guess the number!!!");

    let secret_number = rand::thread_rng().gen_range(1..=100);
    println!("The secret number is: {secret_number}");

    loop {
        println!("Please input your guess: ");


        let mut guess = String::new();
        // In rust by default variables are immutabl, that's why we are using 'mut'
        // let apples = 5; // Immutable

        io::stdin()
            .read_line(&mut guess)
            .expect("Failed to read line");

        let guess: u32 = match guess.trim().parse(){
            Ok(num) => num,
            Err(_) => continue,
        };

        println!("You guessed: {}", guess);

        match guess.cmp(&secret_number) {
            Ordering::Less => println!("Too small!"),
            Ordering::Greater => println!("Too big!"),
            Ordering::Equal => {
                println!("You Win!!!");
                break;
            }
        }
    }

    let x = 2;
    let y = 10;
    println!("x is {x} and y + 2 is {}", y+2);
}
