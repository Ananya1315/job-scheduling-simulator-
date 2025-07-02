export function sstf(requests, head) {
    let totalMovement = 0;
    const sequence = [head];
    const completed = new Array(requests.length).fill(false);
    let count = 0;
  
    while (count < requests.length) {
      let minDiff = Number.MAX_SAFE_INTEGER;
      let minIndex = -1;
  
      for (let i = 0; i < requests.length; i++) {
        if (!completed[i]) {
          const diff = Math.abs(requests[i] - head);
          if (diff < minDiff) {
            minDiff = diff;
            minIndex = i;
          }
        }
      }
  
      if (minIndex === -1) break;
  
      completed[minIndex] = true;
      head = requests[minIndex];
      totalMovement += minDiff;
      sequence.push(head);
      count++;
    }
  
    return {
      totalMovement,
      sequence,
    };
  }
  