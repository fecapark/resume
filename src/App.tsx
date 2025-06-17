import { isMobile } from 'react-device-detect'
import { FaGithub } from 'react-icons/fa'
import { MdHouse } from 'react-icons/md'
import { SiVelog } from 'react-icons/si'
import { tv } from 'tailwind-variants'

import { config } from '@/components/config'
import { IconLink } from '@/components/IconLink'
import { Article } from '@/components/layout/Article'
import { Block } from '@/components/layout/Block'
import { Introduction } from '@/components/layout/Introduction'
import { Section } from '@/components/layout/Section'
import { TextLink } from '@/components/TextLink'

const responsive = tv({
  slots: {
    container: '',
    font: 'leading-[1.45] font-medium',
  },
  variants: {
    media: {
      printMode: {
        container: 'py-[14.58vw]',
        font: 'text-[2vw]',
      },
      mobile: {
        container: 'px-[4vw] py-[14.58vw]',
        font: 'text-[6vw]',
      },
      desktop: {
        container: 'py-[14.58vw] pr-[10vw]',
        font: 'text-[1.6vw]',
      },
    },
  },
})

export const App = () => {
  const { container, font } = responsive()

  return (
    <div
      className={container({
        media: isMobile ? 'mobile' : config.printMode ? 'printMode' : 'desktop',
      })}
    >
      <div
        className={font({
          media: isMobile ? 'mobile' : config.printMode ? 'printMode' : 'desktop',
        })}
      >
        <div className="flex flex-col gap-[14.4vw]">
          <Introduction />

          <Section title="Work Experiences.">
            <Article
              descriptions={['2024.08 ~ 2025.02', 'Frontend Engineer Intern', '중고차팀']}
              title="당근마켓"
            >
              <Block
                description="경매 입찰자 분들을 위한 중고차 경매 웹서비스의 기능들을 개발하고 개선했습니다."
                list={[
                  { text: '차량 사진의 부분 확대 기능 구현' },
                  { text: '차량 부위/옵션별 감가 항목 제출 폼 구현' },
                ]}
                title="중고차 경매 웹서비스 기여"
              />

              <Block
                description="경매 차량의 진단 결과 불일치로 인한 클레임을 처리해주는 서비스를 만들었습니다.\n기획 단계부터 참여하여 프론트엔드 부분은 혼자 맡아 진행했습니다.\n뷰 자체가 재사용되는 부분이 많아 컴포넌트 재사용성을 높이며 개발했습니다."
                list={[
                  { text: '승인/반려 기반의 양방향 소통이 가능한 클레임 처리 기능 구현' },
                  { text: '클레임 정산 테이블 구현' },
                  { text: '차량 진단 결과 피드백 폼 구현' },
                ]}
                title="중고차 경매 클레임 처리 서비스"
              />

              <Block
                description="당근 중고차팀의 어드민 페이지의 부족한 기능들을 개발하고, 편의성을 높였습니다.\n실제 겪고있는 불편한 점들을 개선하기 위해 팀원 및 CS 오퍼레이터분들의 니즈를 여쭤보며 개선했습니다."
                list={[
                  { text: '차량 목록 테이블 뷰 및 필터링 기능 구현' },
                  { text: '차량 상세 페이지 뷰 구현' },
                  { text: '사용자 상세 페이지 뷰 구현' },
                  { text: '개발 생산성 향상을 위한 UI 단위의 각종 컴포넌트 개발' },
                  { text: '각 어드민 페이지들간 유기적 연결 작업' },
                ]}
                title="어드민 페이지 개선 및 유지보수"
              />
            </Article>
          </Section>

          <Section title="Featured.">
            <Article
              content="넥슨 메이플랜드에서 거래되는 아이템들의 현재 시세를 간단한 통계 결과와 함께 알려주는 서비스를 약 2주간 혼자서 개발했습니다. 거래 아이템들의 시세 판단 및 악의적 시세 조작 완화를 목적으로 삼았습니다. 커뮤니티와 유튜브를 통한 마케팅 덕분에 월 평균 PV 120만 이상을 기록했으며 수익화에 성공했습니다. 3개월 간 운영 후, 게임의 비전이 불투명해져 서비스 종료를 결정했습니다."
              descriptions={[
                '2024.02 ~ 2024.05',
                <span className="flex">
                  <IconLink
                    className="mr-[0.15em]"
                    href="https://mapleland-auction-webui.vercel.app/"
                    openInNewTab
                  >
                    <MdHouse className="size-[1.2em]" />
                  </IconLink>
                  <IconLink
                    className="mr-[0.15em]"
                    href="https://github.com/fecapark/mapleland-auction-webui"
                    openInNewTab
                  >
                    <FaGithub className="size-[1.2em]" />
                  </IconLink>
                </span>,
              ]}
              title="메이플랜드 옥션"
              titleThumbnailSrc="/thumbnails/mapleland-auction/preview.webm"
            >
              <Block
                list={[
                  { text: '통계 기반 디스코드 및 각종 거래소 시세 크롤링 로직 개발' },
                  { text: '아이템 시세 통계 뷰 및 차트 구현' },
                  { text: '거래 트렌딩 페이지 구현' },
                  { text: 'MDX 기반 공지사항 및 업데이트 페이지 구현' },
                  { text: '서비스 마케팅 및 운영' },
                ]}
                title="What I Did"
              />
              <Block
                list={[
                  {
                    text: 'GA 이벤트 상 스크롤해서 푸터의 공지사항 버튼을 클릭하는 사용자 수가 10% 채 안되었음',
                  },
                  {
                    text: '메인 페이지 중단에 최신 공지 컴포넌트 제작 → 이전 대비 공지사항을 읽는 사용자 수 6배 증가',
                  },
                ]}
                title="GA 이벤트를 통한 UI 개선"
              />
              <Block
                list={[
                  {
                    text: '자음 모음 분리기반 문자열 검색이 타이핑 당 0.6초 걸리는 검색 비용 문제 → 디바운싱으로 딜레이 최소화',
                  },
                  {
                    text: '모바일 검색바가 가상 키보드에 가려지는 문제 → 검색바 focus시 위치 상단 조정 및 레이아웃 변경',
                  },
                ]}
                title="각종 UX 개선"
              />
            </Article>

            <Article
              content="남은 시간을 직관적이고 시각적으로 나타내는 타임 타이머 제품을 구현한 인터랙티브 프로젝트입니다. 단순히 인터랙션을 구현하는 것을 넘어, 자연스러운 범주 내에서 의도적인 트랜지션을 통한 사용자 시선 처리 및 행동 유도를 목표로 했습니다."
              descriptions={[
                '2022.12 ~ 2023.01',
                <span className="flex">
                  <IconLink
                    className="mr-[0.15em]"
                    href="https://time-timer.vercel.app/"
                    openInNewTab
                  >
                    <MdHouse className="size-[1.2em]" />
                  </IconLink>
                  <IconLink
                    className="mr-[0.15em]"
                    href="https://github.com/fecapark/time-timer"
                    openInNewTab
                  >
                    <FaGithub className="size-[1.2em]" />
                  </IconLink>
                  <IconLink
                    className="mr-[0.15em]"
                    href="https://velog.io/@fecapark/%EB%82%98%EC%9D%98-%EC%B2%AB-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8"
                    openInNewTab
                  >
                    <SiVelog className="size-[1.2em]" />
                  </IconLink>
                </span>,
              ]}
              title="Time Timer"
              titleThumbnailSrc="/thumbnails/time-timer/preview.webm"
            >
              <Block
                list={[
                  {
                    text: '의도적인 컴포넌트 사이의 Fade-In 딜레이',
                  },
                  {
                    text: '무의식적으로 시선이 따라가도록 유도함',
                    indent: 2,
                  },
                  {
                    text: '컴포넌트들 사이의 경계 또한 인지시켜 서로 다른 기능/컨텐츠임을 인식시킴',
                    indent: 2,
                  },
                  { text: '인터랙션 시 불필요한 모든 요소를 감춤' },
                  {
                    text: '타이머로 시선 집중 유도',
                    indent: 2,
                  },
                  { text: '시간 강조를 위해 인터랙션 시 연속적으로 크기에 변화를 줌' },
                  {
                    text: '성능을 위해 font-size 변경 대신 transform: scale 을 사용한 트랜지션 구현',
                    indent: 2,
                  },
                ]}
                title="트랜지션/애니메이션을 통한 사용자 행동 유도"
              />
              <Block
                list={[
                  {
                    text: '인터랙션이 발생하지 않더라도 오디오를 실행하도록 브라우저 우회 로직 구현',
                  },
                  {
                    text: '백그라운드 타이머 종료 알림을 위해 Service Worker 구축 및 웹 푸쉬(FCM) 알림 기능 개발',
                  },
                  {
                    text: '앱을 PWA로 구축하여 다운로드 제공',
                  },
                  {
                    text: '기간별 사용 기록, 잔디 그래프 및 행동 분석 등 통계 뷰 구현',
                  },
                  {
                    text: '색상, 시간 단위, 언어 등 다양한 커스터마이징 옵션 제공',
                  },
                ]}
                title="기타 작업들"
              />
            </Article>
          </Section>

          <Section title="Projects.">
            <Article
              content="숭실대학교 개발동아리 유어슈의 배포 인프라 관리 시스템인 YIS의 디자인과 프론트엔드를 혼자서 구현했으며 기획 고도화에 참여했습니다. 사용자 풀과 도메인 특성상 어려운 난이도를 고려하여 최대한 직관적으로 유저 플로우를 설계하고 구현했습니다. 토스증권 WTS를 벤치마킹해서 재사용가능하며 다형성을 갖는 기능 컴포넌트 제작에 많은 노력을 쏟았습니다. 메타프로그래밍을 적용해 여러 부분에서 생산성 향상을 이끌어냈습니다."
              descriptions={[
                '2025.05 ~ 2025.06',
                '인터널 프로덕트',
                <span className="flex">
                  <IconLink className="mr-[0.15em]" href="https://yis.yourssu.com" openInNewTab>
                    <MdHouse className="size-[1.2em]" />
                  </IconLink>
                  <IconLink
                    className="mr-[0.15em]"
                    href="https://github.com/yourssu/yis-client"
                    openInNewTab
                  >
                    <FaGithub className="size-[1.2em]" />
                  </IconLink>
                </span>,
              ]}
              lowContainerMargin
              title="Yourssu Infrastructure System"
              titleThumbnailSrc="/thumbnails/yis/preview.webm"
            >
              <Block
                list={[
                  { text: '서비스 전체 디자인 및 에셋 제작' },
                  { text: 'JWT 인증 및 권한 관리 시스템 구현' },
                  { text: '안정성을 위해 프로젝트 코드 전반에 강한 타입 추론 적용' },
                  { text: '확장성 있는 각종 UI 컴포넌트 개발 및 애니메이션 구현' },
                  {
                    text: '하나의 모달 인터페이스로 상황에 맞춰 퍼널 모달 · 코드 파일 모달 · 수정 모달 등 다형성을 갖도록 구현',
                    indent: 2,
                  },
                  { text: 'zod 기반 type-safe 폼 벨리데이션 라이브러리 구현' },
                  { text: '프론트엔드 에러 핸들링 인터페이스 공통화' },
                  { text: '배포 심사 및 리소스 관리를 위한 어드민 페이지 구현' },
                ]}
                title="What I Did"
              />
              <Block
                list={[
                  {
                    text: '코드젠을 통한 JS Module, CSS Variable, Tailwind v4 theme 토큰 간 스타일 코드 중복 문제 해결',
                  },
                  {
                    text: '직관적 커밋 메시지 카테고라이징을 위해 gitmoji 도입',
                  },
                  {
                    text: '하지만 커밋 메시지에 gitmoji 자체를 입력해야하는 불편함 발생',
                    indent: 2,
                  },
                  {
                    text: 'husky로 pre-commit 시간에 단축어를 입력하여 깃모지를 바로 채워주는 스크립트 작성',
                    indent: 2,
                  },
                  {
                    text: '에디터 실행 시 자동으로 개발 서버가 실행되도록 vscode task 작성',
                  },
                ]}
                title="DX 개선 작업"
              />
            </Article>

            <Article
              content="토스 스타일의 숫자 슬라이딩 애니메이션 라이브러리입니다. 토스 Simplicity 21 컨퍼런스에서 영감을 받아 하루만에 만들었습니다. 비단 라이브러리를 만드는 것에 그치지 않고, 데모 페이지를 제작하여 직접 다양한 파라미터를 적용해볼 수 있도록 했습니다."
              descriptions={[
                '2024.05',
                '오픈소스 라이브러리',
                <span className="flex">
                  <IconLink
                    className="mr-[0.15em]"
                    href="https://number-rolling-web.vercel.app/"
                    openInNewTab
                  >
                    <MdHouse className="size-[1.2em]" />
                  </IconLink>
                  <IconLink
                    className="mr-[0.15em]"
                    href="https://github.com/fecapark/number-rolling"
                    openInNewTab
                  >
                    <FaGithub className="size-[1.2em]" />
                  </IconLink>
                </span>,
              ]}
              lowContainerMargin
              lowContentMargin
              title="Number Rolling"
              titleThumbnailSrc="/thumbnails/number-rolling/preview.webm"
            />
            <Article
              content="메타볼 효과를 웹에 구현한 인터랙티브 프로젝트입니다. 퍼포먼스 향상을 위해 WebGL 라이브러리인 PIXI.js를 사용하여 구현했습니다. 약간의 재미를 위해 인터랙션으로 메타볼을 화면에 만들고 터트리는 애니메이션을 구성하였습니다. 메타볼이 터지는 스프링 효과에는 프레임 단위로 오브젝트들의 위치를 계산해야했기 때문에, 직접 스프링 효과 라이브러리를 구현해서 적용했습니다. 또한 여러가지 메타볼을 만들어낼 수 있도록 파라미터를 조정하는 인스펙터 UI를 제공합니다."
              descriptions={[
                '2023.06',
                '인터랙티브 프로젝트',
                <span className="flex">
                  <IconLink
                    className="mr-[0.15em]"
                    href="https://fecapark.github.io/metaball-interaction/"
                    openInNewTab
                  >
                    <MdHouse className="size-[1.2em]" />
                  </IconLink>
                  <IconLink
                    className="mr-[0.15em]"
                    href="https://github.com/fecapark/metaball-interaction"
                    openInNewTab
                  >
                    <FaGithub className="size-[1.2em]" />
                  </IconLink>
                  <IconLink
                    className="mr-[0.15em]"
                    href="https://velog.io/@fecapark/%EC%9C%A0%EC%A0%80-%EC%9D%B8%ED%84%B0%EB%9E%99%EC%85%98%EA%B3%BC-%EB%A9%94%ED%83%80%EB%B3%BC-%ED%9A%A8%EA%B3%BC%EB%A5%BC-%ED%95%A9%EC%B9%98%EB%A9%B4-Metaball-Interaction"
                    openInNewTab
                  >
                    <SiVelog className="size-[1.2em]" />
                  </IconLink>
                </span>,
              ]}
              lowContainerMargin
              lowContentMargin
              title="Metaball Interaction"
              titleThumbnailSrc="/thumbnails/metaball-interaction/preview.webm"
            />
            <Article
              content={
                <>
                  <TextLink href="https://www.youtube.com/watch?v=Q8TXgCzxEnw" openInNewTab>
                    Google Material Design 소개 영상
                  </TextLink>
                  의 모션 그래픽에서 영감을 받아 만든 바닐라 JS 프로젝트입니다. 모션 그래픽의
                  복잡하고 연속적인 애니메이션 타임라인을 구현하기 위해, 직접 애니메이션
                  라이브러리를 구현했습니다. 사용자들이 프로젝트에 몰입할 수 있도록 모든 오브젝트가
                  연속적으로 이어지는 애니메이션을 구성했습니다.
                </>
              }
              descriptions={[
                '2023.06.27',
                <span className="flex">
                  <IconLink
                    className="mr-[0.15em]"
                    href="https://fecapark.github.io/material-form"
                    openInNewTab
                  >
                    <MdHouse className="size-[1.2em]" />
                  </IconLink>
                  <IconLink
                    className="mr-[0.15em]"
                    href="https://github.com/fecapark/material-form"
                    openInNewTab
                  >
                    <FaGithub className="size-[1.2em]" />
                  </IconLink>
                </span>,
              ]}
              lowContainerMargin
              lowContentMargin
              title="Material Form"
              titleThumbnailSrc="/thumbnails/material-form/preview.webm"
            >
              <Block
                list={[
                  {
                    text: 'Pub/Sub 패턴을 활용한 해시 라우터 구현',
                  },
                  {
                    text: '간편한 DOM 조작과 상태 변경 및 리렌더링을 위한 컴포넌트 인터페이스 구현',
                  },
                  {
                    text: (
                      <>
                        <TextLink href="https://github.com/gre/bezier-easing" openInNewTab>
                          bezier-easing 라이브러리
                        </TextLink>{' '}
                        기반의 애니메이션 타임라인 라이브러리 구현
                      </>
                    ),
                  },
                  {
                    text: '연속적 애니메이션 구성의 편의를 위해 애니메이션 파라미터 캐싱 스토리지 구현',
                    indent: 2,
                  },
                ]}
              />
            </Article>
            <Article
              content="슬러시 기계에서 영감을 받아 회전하는 도형과 공의 물리작용을 HTML5 Canvas로 구현한 프로젝트입니다. 마치 장난감처럼 사용자가 인터랙션으로 공을 만들고, 도형의 회전을 조작할 수 있도록 구현했습니다."
              descriptions={[
                '2022.04.20',
                '인터랙티브 프로젝트',
                <span className="flex">
                  <IconLink
                    className="mr-[0.15em]"
                    href="https://fecapark.github.io/inside-slushy"
                    openInNewTab
                  >
                    <MdHouse className="size-[1.2em]" />
                  </IconLink>
                  <IconLink
                    className="mr-[0.15em]"
                    href="https://github.com/fecapark/inside-slushy"
                    openInNewTab
                  >
                    <FaGithub className="size-[1.2em]" />
                  </IconLink>
                </span>,
              ]}
              lowContainerMargin
              lowContentMargin
              title="Inside Slushy"
              titleThumbnailSrc="/thumbnails/inside-slushy/preview.webm"
            >
              <Block
                list={[
                  {
                    text: '인터랙션에 필요한 모든 물리엔진 구현',
                  },
                  {
                    text: '질량, 벡터 기반 가속 이동 및 충돌 처리',
                    indent: 2,
                  },
                  {
                    text: (
                      <>
                        프레임 단위 연산에서의{' '}
                        <TextLink
                          href="https://gamedev.stackexchange.com/questions/104042/2d-multiple-circle-collision-response"
                          openInNewTab
                        >
                          Multiple Circle Collision
                        </TextLink>{' '}
                        문제 해결
                      </>
                    ),
                    indent: 2,
                  },
                  {
                    text: '회전한 물체와의 충돌시 각도 반사',
                    indent: 2,
                  },
                  {
                    text: '직관적 사용을 위해 스포트라이트 기반의 가이드라인 구현',
                  },
                  {
                    text: '모든 오브젝트의 화면 리사이징 대응',
                  },
                ]}
              />
            </Article>
          </Section>

          <Section title="Other Experiences.">
            <Block
              description="숭실대학교 개발동아리 유어슈에서 프론트엔드 파트 멤버로 참여하고 있습니다.\n조직내에서 자유로운 개발 문화를 만드려 앞장서고 있습니다."
              list={[
                {
                  text: "유어슈 내부 인프라 배포 시스템 'Yourssu Infrastructure System' 디자인 및 프론트엔드 개발",
                },
                {
                  text: "슬랙 무료 버전에서 그룹 메시징 및 스레드 아카이빙을 해주는 '유어슈 멘션봇'",
                },
                {
                  text: '유어슈 디자인 시스템 개편 TF 프론트엔드팀 리드',
                },
                {
                  text: '숨쉴때 서비스 개편 및 유지보수',
                },
                {
                  text: '커뮤니케이션 및 개발 문화가 중요하다고 생각해서, 관련된 내용들을 직접 작성하여 공유하곤 합니다.',
                },
                {
                  text: (
                    <TextLink
                      href="https://www.notion.so/1d93ca7ccc86802fbd0de15feadd3da0?pvs=25"
                      openInNewTab
                    >
                      코드리뷰 및 커뮤니케이션 아티클
                    </TextLink>
                  ),
                  indent: 2,
                },
                {
                  text: (
                    <>
                      <TextLink
                        href="https://github.com/yourssu/Yourssu-Scouter-Frontend/pull/12#discussion_r1986031104"
                        openInNewTab
                      >
                        간혹 시간을 들여서라도 코드 품질에 대해 끝장 토론을 하곤 합니다.
                      </TextLink>
                    </>
                  ),
                  indent: 2,
                },
              ]}
              title={
                <span>
                  <span>Yourssu</span>
                  <span className="text-grey500 ml-[0.695vw] text-[0.65em] font-normal">
                    24.04 ~ 현재
                  </span>
                </span>
              }
            />

            <Block
              description="구글의 대학생 개발자 커뮤니티인 GDSC(현재 GDG)에서 프론트엔드 멤버로 참여하고 있습니다."
              list={[
                {
                  text: '매주 1회 프론트엔드 분야에 국한되지 않은 다양한 개발 파트의 세미나 발표를 듣습니다.',
                },
                {
                  text: 'React 스터디 멘토로서 주 1회 React 강의를 진행했습니다.',
                },
                {
                  text: '직접 스피커 활동에도 참여합니다.',
                },
                {
                  text: (
                    <TextLink href="https://youtu.be/x9ozmIr2DoE" openInNewTab>
                      웹 사이트로 끝까지 벌어보자 - 24.05.04
                    </TextLink>
                  ),
                  indent: 2,
                },
              ]}
              title={
                <span>
                  <span>Google Developer Student Clubs</span>
                  <span className="text-grey500 ml-[0.695vw] text-[0.65em] font-normal">
                    23.09 ~ 현재
                  </span>
                </span>
              }
            />

            <Block
              list={[
                {
                  text: '숭실대학교 컴퓨터학부 학부생으로 현재는 휴학중입니다.',
                },
              ]}
              title={
                <span>
                  <span>숭실대학교 컴퓨터학부</span>
                  <span className="text-grey500 ml-[0.695vw] text-[0.65em] font-normal">
                    20.03 ~ 현재
                  </span>
                </span>
              }
            />
          </Section>
        </div>
      </div>
    </div>
  )
}
