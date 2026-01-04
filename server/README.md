<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework. You can also check out [Laravel Learn](https://laravel.com/learn), where you will be guided through building a modern Laravel application.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the [Laravel Partners program](https://partners.laravel.com).

### Premium Partners

- **[Vehikl](https://vehikl.com)**
- **[Tighten Co.](https://tighten.co)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel)**
- **[DevSquad](https://devsquad.com/hire-laravel-developers)**
- **[Redberry](https://redberry.international/laravel-development)**
- **[Active Logic](https://activelogic.com)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).


---

# Portfolio Website Backend API

## Database Setup

The database `db_web_portfolio` has been created in phpMyAdmin with the following configuration:

**Database Configuration (.env):**
- `DB_CONNECTION=mysql`
- `DB_DATABASE=db_web_portfolio`
- `DB_USERNAME=root`
- `DB_PASSWORD=` (empty for XAMPP default)

## Database Tables

### contacts
- `id` - Primary key
- `name` - Contact name (string, required, min: 2 chars)
- `email` - Contact email (string, required, valid email)
- `message` - Contact message (text, required, min: 10 chars)
- `created_at` - Timestamp
- `updated_at` - Timestamp

## API Endpoints

### POST /api/contact
Submit a new contact form message.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Your message here"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "Thank you! Your message has been sent successfully.",
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Your message here",
    "created_at": "2026-01-04T12:00:00.000000Z",
    "updated_at": "2026-01-04T12:00:00.000000Z"
  }
}
```

### GET /api/contacts
Retrieve all contact messages (for admin use).

## Running the Server

1. Make sure XAMPP MySQL is running
2. Start the Laravel development server:
```bash
php artisan serve
```

The API will be available at `http://localhost:8000`

## CORS Configuration

CORS is configured to allow requests from:
- `http://localhost:5173` (Vite dev server)
- `http://localhost:3000` (Alternative dev server)
