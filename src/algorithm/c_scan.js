export function c_scan(requests, head, diskSize = 200) {
    requests = [...requests].sort((a, b) => a - b); // Clone & sort
    let totalMovement = 0;
    let sequence = [head];
  
    let index = 0;
    while (index < requests.length && requests[index] < head) {
      index++;
    }
  
    // Move right from head to end
    for (let i = index; i < requests.length; i++) {
      totalMovement += Math.abs(requests[i] - head);
      head = requests[i];
      sequence.push(head);
    }
  
    // Move to disk end and wrap to 0
    if (head !== diskSize - 1) {
      totalMovement += Math.abs(diskSize - 1 - head);
      head = 0;
      sequence.push(diskSize - 1);
      sequence.push(0);
      totalMovement += diskSize - 1;
    }
  
    // Continue from start to earlier requests
    for (let i = 0; i < index; i++) {
      totalMovement += Math.abs(requests[i] - head);
      head = requests[i];
      sequence.push(head);
    }
  
    return {
      sequence,
      totalMovement,
    };
  }
  