def clook(requests, head, direction):
    requests = sorted(requests)
    left = [r for r in requests if r < head]
    right = [r for r in requests if r >= head]
    sequence = [head]
    if direction == "right":
        sequence += right
        sequence += left
    else:
        sequence += left[::-1]
        sequence += right[::-1]
    total_seek_time = 0
    for i in range(len(sequence) - 1):
        total_seek_time += abs(
            sequence[i + 1] - sequence[i]
        )
    average_seek_time = (
        total_seek_time / len(requests)
    )
    return {
        "sequence": sequence,
        "total_seek_time": total_seek_time,
        "average_seek_time": average_seek_time
    }