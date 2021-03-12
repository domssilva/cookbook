import java.util.Date;

public class Block {
    public String hash;             // digital signature
    public String previousHash;     // previous block`s digital signature
    private String data;            // block`s data
    private long timestamp;

    public Block(String previousHash, String data) {
        this.data = data;
        this.previousHash = previousHash;
        this.timestamp = new Date().getTime();
        this.hash = calculateHash();
    }

    public String calculateHash() {
        String calculatedhash = StringUtil.applySha256(previousHash + Long.toString(timestamp) + data);
        return calculatedhash;
    }
}

/*
class BlockData {
    public String hash;
    public long timestamp;

    public BlockUnit(String hash) {
        this.hash = this.hash;
        this.timestamp = new Date().getTime();
    }
}
 */
