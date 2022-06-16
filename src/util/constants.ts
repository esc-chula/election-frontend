const thisYear = parseInt(`${new Date().getFullYear() + 543}`.slice(2))
// export const academicYear = new Date().getMonth() < 7 ? thisYear - 1 : thisYear
export const academicYear = new Date().getMonth() < 5 ? thisYear - 1 : thisYear
