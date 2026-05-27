def fcfs(requests,head):
    sequence = [head]
    total_seek_time=0
    current=head 

    for request in requests:
        total_seek_time += abs(request - current)
        sequence.append(request)
        current = request
        average_seek_time = total_seek_time / len(requests)

    return {
        "sequence": sequence,
        "total_seek_time": total_seek_time,
        "average_seek_time": average_seek_time
    }