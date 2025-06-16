import { FaGithub } from 'react-icons/fa'
import { MdHouse } from 'react-icons/md'

import { Article } from '@/components/layout/Article'
import { Block } from '@/components/layout/Block'
import { Introduction } from '@/components/layout/Introduction'
import { Section } from '@/components/layout/Section'

export const App = () => {
  return (
    <div className="py-[14.58vw] pr-[10vw]">
      <div className="text-[1.6vw] leading-[1.45] font-medium">
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
                  '차량 사진의 부분 확대 기능 구현',
                  '차량 부위/옵션별 감가 항목 제출 폼 구현',
                ]}
                title="중고차 경매 웹서비스 기여"
              />

              <Block
                description="경매 차량의 진단 결과 불일치로 인한 클레임을 처리해주는 서비스를 만들었습니다.\n기획 단계부터 참여하여 프론트엔드 부분은 혼자 맡아 진행했습니다.\n뷰 자체가 재사용되는 부분이 많아 컴포넌트 재사용성을 높이며 개발했습니다."
                list={[
                  '클레임 처리 기능 구현',
                  '클레임 정산 테이블 구현',
                  '차량 진단 결과 피드백 폼 구현',
                ]}
                title="중고차 경매 클레임 처리 서비스"
              />

              <Block
                description="당근 중고차팀의 어드민 페이지의 부족한 기능들을 개발하고, 편의성을 높였습니다.\n실제 겪고있는 불편한 점들을 개선하기 위해 팀원 및 CS 오퍼레이터분들의 니즈를 여쭤보며 개선했습니다."
                list={[
                  '차량 목록 테이블 뷰 및 필터링 기능 구현',
                  '차량 상세 페이지 뷰 구현',
                  '사용자 상세 페이지 뷰 구현',
                  '개발 생산성 향상을 위한 UI 단위의 각종 컴포넌트 개발',
                  '각 어드민 페이지들간 유기적 연결 작업',
                ]}
                title="어드민 페이지 개선 및 유지보수"
              />
            </Article>
          </Section>

          <Section title="Projects.">
            <Article
              content="넥슨 메이플랜드에서 거래되는 아이템들의 현재 시세를 간단한 통계 결과와 함께 알려주는 서비스를 약 2주간 혼자서 개발했습니다. 거래 아이템들의 시세 판단 및 악의적 시세 조작 완화를 목적으로 삼았습니다. 커뮤니티와 유튜브를 통한 마케팅 덕분에 월 평균 PV 150만 이상을 기록했으며 수익화에 성공했습니다. 3개월 간 운영 후, 게임의 비전이 불투명해져 서비스 종료를 결정했습니다."
              descriptions={[
                '2024.02 ~ 2024.05',
                <span className="flex items-center gap-[0.2em]">
                  <a
                    className="hover:text-neutral hover:bg-grey100 ease-ease block cursor-pointer rounded-[0.2em] p-[0.2em] leading-0 transition-colors duration-300"
                    href="https://mapleland-auction-webui.vercel.app/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <MdHouse className="size-[1.2em]" />
                  </a>
                  <a
                    className="hover:text-neutral hover:bg-grey100 ease-ease block cursor-pointer rounded-[0.2em] p-[0.2em] leading-0 transition-colors duration-300"
                    href="https://github.com/fecapark/mapleland-auction-webui"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaGithub className="size-[1.2em]" />
                  </a>
                </span>,
              ]}
              title="메이플랜드 옥션"
              titleThumbnailSrc="/thumbnails/mapleland-auction/preview.webm"
            >
              <Block
                list={[
                  '통계 기반 디스코드 및 각종 거래소 시세 크롤링 로직 개발',
                  '아이템 시세 통계 뷰 및 차트 구현',
                  '거래 트렌딩 페이지 구현',
                  'MDX 기반 공지사항 및 업데이트 페이지 구현',
                ]}
                title="What I Did"
              />
              <Block
                list={[
                  'GA 이벤트 상 스크롤해서 푸터의 공지사항 버튼을 클릭하는 사용자 수가 10% 채 안되었음',
                  '메인 페이지 중단에 최신 공지 컴포넌트 제작 → 이전 대비 공지사항을 읽는 사용자 수 6배 증가',
                ]}
                title="GA 이벤트를 통한 UI 개선"
              />
              <Block
                list={[
                  '자음 모음 분리기반 문자열 검색이 타이핑 당 0.6초 걸리는 검색 비용 문제 → 디바운싱으로 딜레이 최소화',
                  '모바일 검색바가 가상 키보드에 가려지는 문제 → 검색바 focus시 위치 상단 조정 및 레이아웃 변경',
                ]}
                title="각종 UX 개선"
              />
            </Article>
          </Section>
        </div>
      </div>
    </div>
  )
}
