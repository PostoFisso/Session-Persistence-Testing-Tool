# Session-Persistence-Testing-Tool
Used primarily with tamper-monkey.

This tool is designed to test client-side session persistence and state handling in web applications.
By automating page refreshes and managing execution states through localStorage, it allows researchers to observe how a web application maintains (or loses) user data and session tokens over time.

Technical Key Features:

**State Management**: Utilizes window.localStorage to ensure the automation persists even after hard page reloads.
**Dynamic UI Injection**: Injects a custom, draggable control panel into the DOM for real-time interaction without interfering with the target site's layout.
**Asynchronous Execution**: Implements non-blocking intervals for background refreshing tasks.
**Event-Driven UI**: Features a draggable interface to prevent UI occlusion during testing.

Note: This script does not harm the host. This is client-side meaning it only modifies your web elements display. It can be turned on or off, depending on the use-case.
Script file: session_persistence.user.js
