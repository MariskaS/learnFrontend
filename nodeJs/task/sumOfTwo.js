process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
    let chunk;
    // Use a loop to make sure we read all available data.
    while ((chunk = process.stdin.read()) !== null) {
        process.stdout.write(chunk.split(' ').reduce((a, b) => Number(a) + Number(b), 0));
    }
});
