import { defineConfig } from 'vitepress'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

// 레퍼런스 사이드바는 스펙에서 생성한다(scripts/gen-reference.mjs).
// 오퍼레이션이 701개라 손으로 유지할 수 없다.
const generatedSidebar = JSON.parse(
  readFileSync(fileURLToPath(new URL('./sidebar.generated.json', import.meta.url)), 'utf8'),
)

export default defineConfig({
  lang: 'ko-KR',
  title: 'Thaki Cloud Aegis API',
  description: '연동 개발자용 API 문서 — IAM, 컴퓨트, 네트워크, 컨테이너',
  base: '/thaki-api-docs/',
  lastUpdated: true,
  cleanUrls: true,

  // 죽은 링크는 빌드를 세운다. 문서에서 끊긴 링크는 없는 것보다 나쁘다.
  ignoreDeadLinks: false,

  head: [['meta', { name: 'robots', content: 'noindex' }]],

  themeConfig: {
    nav: [
      { text: '시작하기', link: '/guide/' },
      {
        text: 'API 레퍼런스',
        items: [
          { text: '전체 목록', link: '/api/' },
          { text: 'IAM', link: '/api/iam/' },
          { text: '컴퓨트', link: '/api/compute/' },
          { text: '네트워크', link: '/api/network/' },
          { text: '컨테이너', link: '/api/container/' },
        ],
      },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '시작하기',
          items: [
            { text: '개요', link: '/guide/' },
            { text: '인증 준비 (서비스 계정·API 키)', link: '/guide/authentication' },
            { text: '공통 규약', link: '/guide/conventions' },
            { text: '오류 처리', link: '/guide/errors' },
          ],
        },
        {
          text: '시나리오',
          items: [
            { text: '네트워크 구성부터 VM 접속까지', link: '/guide/scenario-network-vm' },
            { text: 'NPU 서버 만들기', link: '/guide/scenario-npu' },
            { text: '사용량 모니터링', link: '/guide/scenario-metrics' },
            { text: '쿠버네티스 클러스터와 워크로드', link: '/guide/scenario-container' },
          ],
        },
      ],
      ...generatedSidebar,
      '/api/': [
        {
          text: 'API 레퍼런스',
          items: [
            { text: '전체 목록', link: '/api/' },
            { text: 'IAM', link: '/api/iam/' },
            { text: '컴퓨트', link: '/api/compute/' },
            { text: '네트워크', link: '/api/network/' },
            { text: '컨테이너', link: '/api/container/' },
          ],
        },
      ],
    },

    outline: { level: [2, 3], label: '이 페이지' },
    docFooter: { prev: '이전', next: '다음' },
    lastUpdatedText: '마지막 수정',
    returnToTopLabel: '맨 위로',
    darkModeSwitchLabel: '테마',
    search: { provider: 'local' },

    socialLinks: [{ icon: 'github', link: 'https://github.com/ThakiCloud/thaki-api-docs' }],

    footer: {
      message: 'Thaki Cloud Aegis — 연동 개발자용 API 문서',
      copyright: '© ThakiCloud',
    },
  },
})
