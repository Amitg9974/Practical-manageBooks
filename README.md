### Key Features:
 
1. **CRUD Functionality**: Implements Create, Read, Update, and Delete operations for book management.
   - **Add Books**: Users can add books through a form, which updates the list and stores new entries in localStorage.
   - **Delete Books**: Books can be deleted directly from the list with confirmation prompts to prevent accidental deletions.
   - **Update Books**: Each book entry can be updated using a dynamic form that appears within a modal.
 
2. **Search Functionality**: Includes a live search feature that filters books by titles without the need to reload or perform additional server calls.
 
3. **Responsive Design**: Utilizes a grid layout and media queries to ensure that the application is accessible and aesthetically pleasing on a variety of devices.
 
4. **State Management**: Leverages React's useState and useEffect hooks for state management and side effects, ensuring smooth and performant data handling.
 
5. **CSS/SASS Styling**: Styled using like SCSS, demonstrating advanced CSS features and responsive design principles.
 
6. **Object-Oriented Programming (OOP)**: Utilizes the OOP paradigm to structure the application more robustly:
   - **Book Class**: The application defines a `Book` class that encapsulates book properties like title, author, and price, enhancing code readability and maintainability. This approach not only organizes the data effectively but also makes the codebase easier to extend and manage.
 
### Technical Stack:
 
- **Frontend**: React.js, SASS for styling
- **Data Storage**: localStorage for persisting data
