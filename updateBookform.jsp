<form action="updateBook" method="post">
    <input type="hidden" name="id" value="${book.id}">
    <label>Title: <input type="text" name="title" value="${book.title}" required></label><br>
    <label>Author: <input type="text" name="author" value="${book.author}" required></label><br>
    <label>ISBN: <input type="text" name="isbn" value="${book.isbn}" required></label><br>
    <label>Available: <input type="checkbox" name="available" value="true" ${book.available ? 'checked' : ''}></label><br>
    <button type="submit">Update Book</button>
</form>
