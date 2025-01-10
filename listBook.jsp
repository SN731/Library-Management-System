<table>
    <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Author</th>
        <th>ISBN</th>
        <th>Available</th>
        <th>Actions</th>
    </tr>
    <c:forEach var="book" items="${books}">
        <tr>
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td>${book.available}</td>
            <td>
                <a href="updateBook?id=${book.id}">Edit</a>
                <a href="deleteBook?id=${book.id}">Delete</a>
            </td>
        </tr>
    </c:forEach>
</table>
<a href="addBook">Add New Book</a>
