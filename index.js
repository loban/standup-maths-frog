//
// StandUp Maths - Frog Problem (from YouTube)
//

function frog_jump(available_jumps = 10, jump_history = []) {
    if (available_jumps === 0)
        return jump_history;

    const jump_index = Math.floor(Math.random() * available_jumps) + 1;

    return frog_jump(available_jumps - jump_index, [...jump_history, jump_index]);
}

function frog_jump_expected(available_jumps = 10, trial_count = 1000000) {
    const all_jump_sequences = [];

    for (i = 0; i < trial_count; i++) {
        const jump_sequence = frog_jump(available_jumps);
        all_jump_sequences.push(jump_sequence.length);
    }

    const total_jumps = all_jump_sequences.reduce((previous, current) => previous + current);

    return total_jumps / trial_count;
}

function frog_experiment(max_available_jumps = 10000000) {
    console.log('n = available lillypads, j = expected number of jumps');
    for (n = 1; n <= max_available_jumps; n = n * 10) {
        const j = frog_jump_expected(n);
        console.log(`n = ${n}, j = ${j}`);
    }
}

frog_experiment();
