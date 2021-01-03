export const getNewAndMissing = (previousArray, recentArray) => {
  //   console.log({ previousCount: previousArray.length })
  //   console.log({ recentCount: recentArray.length })

  const newUsers = recentArray.filter((x) => !previousArray.includes(x))

  const missingUsers = previousArray.filter((x) => !recentArray.includes(x))

  return { new: newUsers, missing: missingUsers }
}
