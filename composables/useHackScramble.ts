import { ScrambleProps } from '~~/types/scrambleProps'

export function useHackScramble(initStr: string) {
  const props: ScrambleProps = {
    wait: 15,
    initStr,
    randomChars: '<>-_\\/[]{}=+*^#',
    randomLength: 2
  }
  const scramble = useScramble(props)

  return scramble
}
