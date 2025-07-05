export function scan(requests, head, diskSize = 200, direction = 1) {
  let sequence = [head];
  let totalMovement = 0;

  // Step 1: Sort requests
  let sorted = [...requests].sort((a, b) => a - b);

  // Step 2: Find first request greater than head
  let index = 0;
  while (index < sorted.length && sorted[index] < head) {
    index++;
  }

  if (direction === 1) {
    // Move right
    for (let i = index; i < sorted.length; i++) {
      totalMovement += Math.abs(sorted[i] - head);
      head = sorted[i];
      sequence.push(head);
    }

    if (head !== diskSize - 1) {
      totalMovement += Math.abs((diskSize - 1) - head);
      head = diskSize - 1;
      sequence.push(head);
    }

    for (let i = index - 1; i >= 0; i--) {
      totalMovement += Math.abs(sorted[i] - head);
      head = sorted[i];
      sequence.push(head);
    }

  } else {
    // Move left
    for (let i = index - 1; i >= 0; i--) {
      totalMovement += Math.abs(sorted[i] - head);
      head = sorted[i];
      sequence.push(head);
    }

    if (head !== 0) {
      totalMovement += head;
      head = 0;
      sequence.push(head);
    }

    for (let i = index; i < sorted.length; i++) {
      totalMovement += Math.abs(sorted[i] - head);
      head = sorted[i];
      sequence.push(head);
    }
  }

  return {
    totalMovement,
    sequence
  };
}
