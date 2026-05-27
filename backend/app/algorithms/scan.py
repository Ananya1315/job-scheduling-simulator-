def scan(requests, head, disk_size, direction):
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
        if current != disk_size - 1:
            total_seek_time += abs((disk_size - 1) - current)
            current = disk_size - 1
            sequence.append(current)
        for request in reversed(left):
            total_seek_time += abs(request - current)
            current = request
            sequence.append(request)
    else:
        for request in reversed(left):
            total_seek_time += abs(request - current)
            current = request
            sequence.append(request)
        if current != 0:
            total_seek_time += current
            current = 0
            sequence.append(current)
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