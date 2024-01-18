# QR Code Generator

This simple Node.js script allows you to generate a QR code from a user-provided URL. The generated QR code is saved as an image file, and the user input URL is stored in a text file.

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repository.git
   
2. **Navigate to the project directory:**

   ```bash
   cd your-repository

3. **Install the required npm packages:**

   ```bash
   npm install inquirer qr-image

### Usage
Run the script using the following command:

 ```bash
node index.js
```
Follow the prompts to enter a URL. The script will generate a QR code image and save the URL in a text file.

### Notes
- Make sure to include the protocol (e.g., http:// or https://) in the URL.
- The generated QR code will be saved as qrcode.png.
- The user input URL will be saved in userInput.txt.

