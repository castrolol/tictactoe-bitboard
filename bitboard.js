
var negativeMask = 511;

var positions = [
    [1, 2, 4],
    [8, 16, 32],
    [64, 128, 256]
];

var negatives = positions.map(r => r.map(c => c ^ negativeMask));

function Bitboard(value) {
    this.value = +value || 0;
}

Bitboard.prototype.valueOf = function () {
    return this.value;
}

Bitboard.prototype.and = function (mask) {
    return new Bitboard(this.value & mask);
}

Bitboard.prototype.or = function (mask) {
    return new Bitboard(this.value | mask);
}

Bitboard.prototype.not = function () {
    return this.xor(negativeMask);
}

Bitboard.prototype.xor = function (mask) {
    return new Bitboard(this.value ^ mask);
}

Bitboard.prototype.getPosition = function (x, y) {
    if (x < 0 || x > 2) return false;
    if (y < 0 || y > 2) return false;
    return !!(this.value & positions[x][y]);
}

Bitboard.prototype.setPosition = function (x, y, val) {
    if (x < 0 || x > 2) return;
    if (y < 0 || y > 2) return;

    if (val) {
        this.value = this.value | positions[x][y];
    } else {
        this.value = this.value & negatives[x][y];
    }
}

Bitboard.prototype.getPositions = function () {
    return positions.map(r => r.map(c => !!(this.value & c)));
}

//fancy print
Bitboard.prototype.toString = function () {

    var positions = this.getPositions();
    return "\n" +
        positions.map(row =>
            "|" +
            row.map(cell => cell ? "0" : "_").join("|") +
            "|"
        ).join("\n");


}

module.exports = Bitboard;

