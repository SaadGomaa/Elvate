# Supermarket Web Application

This is a Supermarket web application built using **Angular**. The application displays a list of products and categories, and users can browse, search, and filter products. Additionally, when a user clicks on a product image, detailed information about the product is displayed.

## Features

- **Products and Categories:** 
  - The app fetches a list of products and categories from a service.
  - Products are displayed with key information (image, title, price, and rating).
  - Categories allow users to filter products.
  
- **Product Details:**
  - Clicking on a product shows detailed information about the product.
  
- **Search Functionality:**
  - Users can search for products by name using a search bar.
  
- **Error Handling with Interceptors:**
  - The project uses **HTTP Interceptors** to centrally manage errors that occur during API requests. This ensures that any issues like failed network requests or server errors are handled consistently, improving the user experience.

- **Organized Structure:**
  - The project uses `services`, `interceptors`, `interfaces`, and `pipes` to maintain clean and organized code.

- **API Integration:**
  - All product and category data is fetched from a remote API. Any errors during these requests are caught and handled using `HTTP Interceptors`.

## Technologies Used

- **Angular** (Version 17.3.8)
- **TypeScript**
- **RxJS**
- **Angular Services, Pipes, and Interceptors**

## Live Demo

You can check out the live demo of the project [here](https://elvate.netlify.app/products).

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js and npm installed on your machine.
- Angular CLI installed globally. You can install it using the following command:

  ```bash
  npm install -g @angular/cli
