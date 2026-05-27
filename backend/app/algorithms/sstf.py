def sstf(requests, head):
    r = requests.copy()
    sequence = [head]
    total_seek_time = 0
    current = head
    while r:
        distances = [abs(request - current) for request in r]
        min_distance_index = distances.index(min(distances))
        next_request = r[min_distance_index]
        total_seek_time += abs(next_request - current)
        sequence.append(next_request)
        current = next_request
        r.pop(min_distance_index)
    average_seek_time = total_seek_time / (len(sequence) - 1)
    return {
        "sequence": sequence,
        "total_seek_time": total_seek_time,
        "average_seek_time": average_seek_time
    }
