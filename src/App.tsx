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
import { useLoadedMediaSources } from '@/components/Providers/MediaLoader'
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
  const { videos } = useLoadedMediaSources()

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

          <Section title="Featured.">
            <Article
              content="넥슨 메이플랜드 내 일부 이용자들의 시세 조작으로 인해 정상적인 거래가 어려운 문제를 인식하고, 이를 해소하기 위해 다중 거래소 데이터를 자동 수집, 정제하는 시스템을 직접 설계했습니다. 통계적 이상치 탐지 알고리즘을 적용해 비정상 시세를 자동으로 제외하고, 시세 변동 그래프를 시각화했습니다. 단독으로 2주 만에 MVP를 완성하여 커뮤니티에서 화제를 얻었고, 월 PV 120만 이상 및 광고 수익화를 달성했습니다. 현재는 서비스되고 있지 않습니다."
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
              titleThumbnailSrc={videos['/thumbnails/mapleland-auction/preview.webm']}
            >
              <Block
                list={[
                  {
                    text: '디스코드 API 미지원으로 인한, 채널 거래소의 아이템 거래글 수집 문제',
                  },
                  {
                    text: 'Network 탭을 분석해 디스코드 내부 API를 역설계하여 세션 유지 및 아이템 게시글 데이터 수집',
                    indent: 2,
                  },

                  {
                    text: '통일 유형이 없는 비선형적 아이템 게시글에서 시세 추출 문제',
                  },
                  {
                    text: '비슷한 이름의 아이템 분류 문제: Levenshtein Distance 기반 fuzzy 매칭 알고리즘 적용',
                    indent: 2,
                  },
                  {
                    text: '키워드(‘삽/팝니다’, 아이템명, 가격 등) 간의 상대적 거리 차이를 이용해, 문맥 상의 거래 유형을 판별하는 문자열 거리 기반 알고리즘 구현',
                    indent: 2,
                  },
                  {
                    text: '아이템 약어 및 갯수, 금액, 확률 관련 용어 혼재: 자주 사용되는 패턴들을 추출, 카테고라이징 후 정규표현식으로 파싱',
                    indent: 2,
                  },

                  {
                    text: '의도적 시세 조작 문제',
                  },
                  {
                    text: '도배성 게시글 및 사재기 의심 게시글 필터링',
                    indent: 2,
                  },
                  {
                    text: 'Modified Z-Score 기반의 이상치 탐지 알고리즘을 적용해 비정상 시세 자동 필터링',
                    indent: 2,
                  },
                  {
                    text: '이전 시세와의 괴리도, 거래량 급등락 등을 고려해 이상치 탐지 정확도 향상',
                    indent: 2,
                  },
                ]}
                title="해결한 문제"
              />
            </Article>

            <Article
              content={
                <>
                  <span>
                    숭실대학교 개발동아리 유어슈의 백엔드 인프라 관리 시스템입니다. 기획 고도화,
                    전체 디자인 및 프론트엔드 개발에 참여했습니다.
                    <br />
                    제품 레벨에서는 직관적 UI 및 쉬운 사용을 목표로, 코드 레벨에서는 컴포넌트의
                    재사용성 극대화를 목표로 개발했습니다.
                  </span>
                </>
              }
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
              title="Yourssu Infra System"
              titleThumbnailSrc={videos['/thumbnails/yis/preview.webm']}
            >
              <Block
                list={[
                  {
                    text: 'CSS · TailwindCSS · JS 디자인 토큰 선언에서의 코드 중복 문제',
                  },
                  {
                    indent: 2,
                    text: (
                      <>
                        토큰의 원천을 일원화하고,{' '}
                        <TextLink
                          href="https://github.com/yourssu/yis-client/blob/main/scripts/codegen/gen-color.mts"
                          openInNewTab
                        >
                          메타프로그래밍
                        </TextLink>
                        으로 각 영역별 데이터를{' '}
                        <TextLink
                          href="https://github.com/yourssu/yis-client/tree/main/src/styles/__generated__"
                          openInNewTab
                        >
                          자동으로 변환하여 생성
                        </TextLink>
                        하도록 개선
                      </>
                    ),
                  },
                  {
                    text: '사용처마다 상이한 에러 핸들링 로직으로 인한 일관성 문제',
                  },
                  {
                    text: (
                      <>
                        예측 가능한 에러들을 단일 추상화 계층으로 통합해{' '}
                        <TextLink
                          href="https://github.com/yourssu/yis-client/blob/main/src/utils/error.ts"
                          openInNewTab
                        >
                          에러 분류와 분류된 인터페이스를 통일
                        </TextLink>
                        함으로서, 일관된 핸들링 방식을 제공
                      </>
                    ),
                    indent: 2,
                  },
                ]}
                title="해결한 문제"
              />
              <Block
                list={[
                  { text: '서비스 전체 디자인 및 에셋 제작' },
                  { text: '서비스 퍼블리싱' },
                  { text: 'JWT 인증 및 권한 관리 시스템 구현' },
                  { text: '대화형 배포 심사 및 리소스 관리를 위한 어드민 페이지 구현' },
                  {
                    text: (
                      <>
                        재사용성과 콘텐츠 중심 마크업 작성을 고려한 각종{' '}
                        <TextLink
                          href="https://github.com/yourssu/yis-client/tree/main/src/components"
                          openInNewTab
                        >
                          Primitive UI 컴포넌트
                        </TextLink>
                        들 개발
                      </>
                    ),
                  },
                ]}
                title="구현한 것들"
              />
              <Block
                list={[
                  {
                    text: 'React, Tanstack Router, Tanstack Query, TailwindCSS, Motion, Cloudflare Pages',
                  },
                ]}
                title="Tech Stack"
              />
            </Article>

            <Article
              content={
                <>
                  남은 시간을 직관적이고 시각적으로 나타내는 타임 타이머 제품을 구현한 인터랙티브
                  프로젝트입니다.
                  <br />
                  단순히 인터랙션을 구현하는 것을 넘어, 자연스러운 범주 내에서 의도적인 트랜지션을
                  통한 사용자 시선 처리 및 행동 유도를 목표로 했습니다.
                </>
              }
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
              titleThumbnailSrc={videos['/thumbnails/time-timer/preview.webm']}
            >
              <Block
                list={[
                  {
                    text: '시선 분산을 막고 타이머에 집중하게 할 수 있는 방법',
                  },
                  {
                    indent: 2,
                    text: '타이머 외의 모든 UI 요소를 제거하고, 타이머 자체에만 집중할 수 있도록 디자인',
                  },
                  {
                    text: '브라우저 정책으로 인해 인터랙션이 발생하지 않으면 오디오 재생이 불가능한 문제',
                  },
                  {
                    indent: 2,
                    text: '이미 인터랙션을 통해 실행되었던 Audio 노드의 소스를 바꿔버려 재실행시키면 정책을 우회할 수 있음을 발견',
                  },
                  {
                    indent: 2,
                    text: '타이머 시작 버튼 클릭 시 소리가 없는 오디오를 재생, 이후 알람 오디오로 교체하여 재생하도록 하여 해결',
                  },
                  {
                    text: '알람 오디오 음량 경험 문제',
                  },
                  {
                    indent: 2,
                    text: '현재 기기 음량에서 알람을 미리 들어볼 수 있도록 하는 기능 제공',
                  },
                ]}
                title="해결한 문제"
              />
              <Block
                list={[
                  {
                    text: '끊김없는 인터랙션 타이머 설정 기능 및 알람 기능',
                  },
                  {
                    text: '기간별 사용 기록, 잔디 그래프 및 행동 분석 등 통계 뷰 구현',
                  },
                  {
                    text: '색상, 시간 단위, 언어 등 다양한 커스터마이징 옵션 제공',
                  },
                  {
                    text: '백그라운드 타이머 종료 알림을 위한 Service Worker 구축 및 FCM 푸쉬 알림 기능',
                  },
                ]}
                title="구현한 것들"
              />
            </Article>
          </Section>

          <Section title="Work Experiences.">
            <Article
              descriptions={['2024.08 ~ 2025.02 (6개월)', 'Frontend Engineer Intern', '중고차팀']}
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
                description="경매 차량의 진단 결과 불일치로 인한 클레임을 처리해주는 서비스를 만들었습니다.\n0to1 단계부터 참여하여 프론트엔드 파트를 핸들링했습니다.\n뷰 자체가 재사용되는 부분이 많아 컴포넌트 재사용성에 신경쓰며 개발했습니다."
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

          <Section title="Other Experiences.">
            <Block
              description="숭실대학교 개발동아리 유어슈에서 프론트엔드 파트 리드진으로 참여하고 있습니다.\n조직내에서 자유로운 개발 문화를 만들고 지식을 공유하여 선순환을 만들기 위해 노력하고 있습니다."
              list={[
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
                      기술 세미나:{' '}
                      <TextLink
                        href="https://odd-blinker-340.notion.site/2853ca7ccc8680ef9c17ca3f33541503?pvs=74"
                        openInNewTab
                      >
                        달리는 서비스에서의 병행 배포 전략
                      </TextLink>
                    </>
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
                {
                  text: '다양한 프로젝트 TF에 참여했습니다.',
                },
                {
                  text: (
                    <>
                      <TextLink href="https://github.com/yourssu/yis-client" openInNewTab>
                        Yourssu Infra System
                      </TextLink>{' '}
                      : 유어슈 내부 백엔드 인프라 배포 시스템
                    </>
                  ),
                  indent: 2,
                },
                {
                  text: (
                    <>
                      <TextLink href="https://github.com/yourssu/soongpt-web" openInNewTab>
                        숭피티
                      </TextLink>{' '}
                      : 숭실대생에 맞는 시간표 추천 서비스
                    </>
                  ),
                  indent: 2,
                },
                {
                  text: (
                    <>
                      <TextLink
                        href="https://github.com/yourssu/Yourssu-Scouter-Frontend"
                        openInNewTab
                      >
                        Yourssu Scouter
                      </TextLink>{' '}
                      : 유어슈 멤버 및 리쿠르팅 관리 백오피스 서비스
                    </>
                  ),
                  indent: 2,
                },
                {
                  text: '24-2학기 유어슈 메인페이지 및 리쿠르팅 페이지 리뉴얼',
                  indent: 2,
                },
                {
                  text: '유어슈 디자인 시스템 TF (중단)',
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
              description="구글의 대학생 개발자 커뮤니티인 GDSC(현재 GDG)에서 프론트엔드 멤버로 참여했습니다."
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
                    23.09 ~ 25.09
                  </span>
                </span>
              }
            />

            <Block
              list={[]}
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

          <Section title="Toys.">
            <Article
              content={<>토스 스타일의 숫자 슬라이딩 애니메이션 리액트 라이브러리입니다.</>}
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
              titleThumbnailSrc={videos['/thumbnails/number-rolling/preview.webm']}
            />
            <Article
              content="메타볼 효과를 웹에 구현한 인터랙티브 프로젝트입니다. 퍼포먼스 향상을 위해 WebGL 라이브러리인 PIXI.js를 사용하여 구현했습니다. 메타볼이 터지는 스프링 효과에는 프레임 단위로 오브젝트들의 위치를 계산해야하는 문제가 있어, 직접 스프링 효과 라이브러리를 구현해서 적용했습니다. 또한 여러가지 메타볼을 만들어낼 수 있도록 파라미터를 조정하는 인스펙터 UI를 제공합니다."
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
              titleThumbnailSrc={videos['/thumbnails/metaball-interaction/preview.webm']}
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
                '2023.06',
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
              titleThumbnailSrc={videos['/thumbnails/material-form/preview.webm']}
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
              content="슬러시 기계에서 영감을 받아 회전하는 도형과 공의 물리작용을 HTML5 Canvas로 구현한 프로젝트입니다."
              descriptions={[
                '2022.04',
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
              titleThumbnailSrc={videos['/thumbnails/inside-slushy/preview.webm']}
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
        </div>
      </div>
    </div>
  )
}
