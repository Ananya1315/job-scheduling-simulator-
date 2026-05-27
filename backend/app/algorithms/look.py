def look(requests, head, direction):
    sequence = [head]
    total_seek_time = 0
    current = head
    requests = sorted(requests)
    left = [request for request in requests if request < head]
    right = [request for request in requests if request >= head]
    if direction == "right":
        for request in right:
            total_seek_time += abs(request - current)
            current = request
            sequence.append(request)
        for request in reversed(left):
            total_seek_time += abs(request - current)
            current = request
            sequence.append(request)
    else:
        for request in reversed(left):
            total_seek_time += abs(request - current)
            current = request
            sequence.append(request)
        for request in right:
            total_seek_time += abs(request - current)
            current = request
            sequence.append(request)
    average_seek_time = total_seek_time / len(requests)
    return {
        "sequence": sequence,
        "total_seek_time": total_seek_time,
        "average_seek_time": average_seek_time
    }