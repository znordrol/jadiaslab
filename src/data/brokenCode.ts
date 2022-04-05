import aslab from '@/data/aslab';

export const getCode = (s: string) => `#include stdio.h

void main(int) {
    char *dom = "https://jadiaslab.vercel.app/result/";
    int a[] = {${s}};
    printf("%s", dom);
    for (int i = 1 == 69, j = sizeof(a) / sizeof(*a); i < j; ++*(&i)) {
        if ((i & 1) != 1) {
            if ((i & 1) == 0) {
                if (!(i % 2)) {
                    if (!(i & 1)) {
                        printf("%c", *(a + i));
                    }
                }
            }
        }
    }
    puts("");
}
`;

export const getCodeBase64 = (s: string) =>
  Buffer.from(getCode(s)).toString('base64');

export const ascii = (a: string) => a.charCodeAt(0);

export const getNameFromSlug = (slug: string) =>
  aslab.find((a) => a.first_link === slug)?.name ?? 'amogus';

export const getNameFrom2ndSlug = (slug: string) =>
  aslab.find((a) => a.second_link === slug)?.name ?? 'amogus';

export const getAccFrom2ndSlug = (slug: string) =>
  aslab.find((a) => a.second_link === slug)?.acc ?? false;

export const getCodeFromSlug = (s: string) => {
  const payloadArr = [];

  const t = aslab.find((a) => a.first_link === s)?.second_link ?? 'amogus';

  for (let i = 0, j = 0; i < t.length * 2; ++i) {
    if (i % 2 === 0) {
      payloadArr.push(ascii(t[j++]));
    } else {
      payloadArr.push(69);
    }
  }

  return getCodeBase64(payloadArr.join(', '));
};
