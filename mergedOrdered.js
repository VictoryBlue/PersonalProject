function mergeIntervals(intervals) {
  if (intervals.length <= 1) {
    return intervals;
  }
  intervals.sort((a,b)=>a[0]-b[0])
  const mergedIntervals = [intervals[0]]
  for (let i = 1; i < intervals.length; i++){
    const currentInterval = intervals[i];
    const lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];

    if (currentInterval[0] <= lastMergedInterval[1]) {
      // 有重叠，合并区间
      lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
    } else {
      // 无重叠，添加新的区间
      mergedIntervals.push(currentInterval);
    }
  }

  return mergedIntervals;
}

// 示例用法
const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
const merged = mergeIntervals(intervals);
console.log(merged); // 输出 [[1, 6], [8, 10], [15, 18]]



