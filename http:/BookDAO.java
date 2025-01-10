package dao;

import models.Book;
import java.sql.*;

public class BookDAO {
    private static final String INSERT_QUERY = "INSERT INTO books (title, author, isbn, available) VALUES (?, ?, ?, ?)";
    private static final String SELECT_QUERY = "SELECT * FROM books";

    private Connection connection;

    public BookDAO(Connection connection) {
        this.connection = connection;
    }

    public void addBook(Book book) throws SQLException {
        try (PreparedStatement statement = connection.prepareStatement(INSERT_QUERY)) {
            statement.setString(1, book.getTitle());
            statement.setString(2, book.getAuthor());
            statement.setString(3, book.getIsbn());
            statement.setBoolean(4, book.isAvailable());
            statement.executeUpdate();
        }
    }

    public ResultSet listBooks() throws SQLException {
        Statement statement = connection.createStatement();
        return statement.executeQuery(SELECT_QUERY);
    }
}
