export function useScramble(initStr: string) {
  const RANDOM_CHARS = '<>-_\\/[]{}=+*^#'
  const WAIT = 30
  const RANDOM_LEN = 2

  const target = initStr
  const current = ref(target)
  let isRunning = false
  let index = 0

  // 文字列に対してスクランブル演出を行う
  const scramble = () => {
    // 多重起動はしない
    if (isRunning) {
      return
    }
    isRunning = true

    index = 0

    const update = () => {
      // ターゲットを少しずつ表示
      const targetpart = target.slice(0, index)
      index++

      // ランダム文字列を生成
      let randomPart = ''
      for (let i = 0; i < RANDOM_LEN; i++)
        randomPart +=
          RANDOM_CHARS[Math.floor(Math.random() * RANDOM_CHARS.length)]

      // 表示する文字列を更新
      current.value = targetpart + randomPart

      // ターゲットを表示しきったら終了
      if (target.length - 1 <= index) {
        isRunning = false
        clearInterval(timerId)
        current.value = target
      }
    }

    // 一定時間ごとに文字列を更新
    const timerId = setInterval(update, WAIT)
  }

  return { scramble, current }
}
