export function fcfs(requests, head) {
    let totalMovement = 0;
    let sequence = [head]; // Start from initial head
  
    for (let i = 0; i < requests.length; i++) {
      totalMovement += Math.abs(requests[i] - head);
      head = requests[i];
      sequence.push(head);
    }
  
    return {
      totalMovement,
      sequence
    };
  }
  