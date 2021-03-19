package app.database;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Connect {
    private final String DbPath = "jdbc:sqlite:/home/nick/Code/cookbook/java/Crud/src/main/resources/users.db";
    private Connection connection = null;

    public Connect() {
        // https://stackoverflow.com/questions/1525444/how-to-connect-sqlite-with-java
        // INITIALIZE DRIVER:
        try {
            Class.forName("org.sqlite.JDBC");
        } catch (ClassNotFoundException eString) {
            System.err.println("Could not init JDBC driver - driver not found");
        }
    }

    public void init() {
        try {
            this.connection = DriverManager.getConnection(DbPath);
            System.out.println("Db connected.");
        } catch (SQLException e) {
            e.printStackTrace();
        }

        if (connection != null) {
            try {
                connection.close();
                System.out.println("Db connection closed.");
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}
