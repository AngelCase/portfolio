import { ScrambleProps } from '~~/types/scrambleProps'

export function useTypeScramble(initStr: string) {
  const props: ScrambleProps = {
    wait: 20,
    initStr,
    randomChars: '_',
    randomLength: 1
  }
  const scramble = useScramble(props)

  return scramble
}
