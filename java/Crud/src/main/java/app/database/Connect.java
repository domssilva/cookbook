package app.database;

import java.sql.*;

public class Connect {
    private final String DbPath = "jdbc:sqlite:/home/nick/Code/cookbook/java/Crud/src/main/resources/users.db";
    private Connection connection;

    public Connect() {
        // https://stackoverflow.com/questions/1525444/how-to-connect-sqlite-with-java
        // INITIALIZE DRIVER:
        try {
            Class.forName("org.sqlite.JDBC");
        } catch (ClassNotFoundException eString) {
            System.err.println("Could not init JDBC driver - driver not found");
        }
    }

    public Connection init() {
        connection = null;

        try {
            connection = DriverManager.getConnection(DbPath);
            // System.out.println("Db connected.");
        } catch (SQLException e) {
            e.printStackTrace();
        }

       return connection;
    }

    public void selectAll() {
        String sql = "SELECT * FROM Users";
        Connection conn = null;
        try {
            conn = this.init();
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery(sql);

            while (rs.next()) {
                System.out.print(rs.getString("name"));
                System.out.print(", ");
                System.out.println(rs.getString("email"));
            }

            conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }

        this.close(conn);
    }

    public void close(Connection conn) {
        if (conn != null) {
            try {
                conn.close();
                // System.out.println("db connection closed.");
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }

    public void insert(String name, String email) {
        String sql = "INSERT INTO Users(name, email) VALUES(?, ?)";
        Connection conn = null;

        try {
            conn = this.init();
            PreparedStatement pstmt = conn.prepareStatement(sql);
            pstmt.setString(1, name);
            pstmt.setString(2, email);
            pstmt.executeUpdate();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }

        this.close(conn);
    }
}
