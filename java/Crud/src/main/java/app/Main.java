package app;

import app.database.Connect;
import java.sql.SQLException;

public class Main {
    public static void main(String[] args) throws SQLException {
        Connect db = new Connect();
        db.selectAll();
    }
}
