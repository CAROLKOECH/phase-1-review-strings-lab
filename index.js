// Write your code in this file!
// Define the 'currentUser' variable
const currentUser = 'John Smith';

// Define the 'welcomeMessage' variable
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

// Define the 'excitedWelcomeMessage' variable
const excitedWelcomeMessage = `WELCOME TO FLATBOOK, ${currentUser.toUpperCase()}!`;

// Define the 'shortGreeting' variable
const firstInitial = currentUser[0];
const shortGreeting = `Welcome, ${firstInitial}!`;

// Export the variables (if needed)
module.exports = {
  currentUser,
  welcomeMessage,
  excitedWelcomeMessage,
  shortGreeting
};
