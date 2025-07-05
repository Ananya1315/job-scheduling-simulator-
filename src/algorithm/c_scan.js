export function c_scan(requests, head, diskSize = 200, direction = 'right') {
  requests = [...requests].sort((a, b) => a - b); // Clone & sort
  let totalMovement = 0;
  let sequence = [head];

  let index = 0;
  while (index < requests.length && requests[index] < head) {
    index++;
  }

  if (direction === 'right') {
    // Move right from head to disk end
    for (let i = index; i < requests.length; i++) {
      totalMovement += Math.abs(requests[i] - head); 
    

      head = requests[i];
      sequence.push(head);
    }

    if (head !== diskSize - 1) {
      totalMovement += Math.abs((diskSize - 1) - head);
      sequence.push(diskSize - 1);
      head = 0;
      sequence.push(0);
      totalMovement += diskSize - 1; // Wrap-around
    }

    // Move from start to earlier requests
    for (let i = 0; i < index; i++) {
      totalMovement += Math.abs(requests[i] - head);
      head = requests[i];
      sequence.push(head);
    }

  } else {
    // direction === 'left'
    for (let i = index - 1; i >= 0; i--) {
      totalMovement += Math.abs(requests[i] - head);
      head = requests[i];
      sequence.push(head);
    }

    if (head !== 0) {
      totalMovement += head;
      sequence.push(0);
      head = diskSize - 1;
      sequence.push(diskSize - 1);
      totalMovement += diskSize - 1;
    }

    for (let i = requests.length - 1; i >= index; i--) {
      totalMovement += Math.abs(requests[i] - head);
      head = requests[i];
      sequence.push(head);
    }
  }

  return {
    sequence,
    totalMovement,
  };
}
