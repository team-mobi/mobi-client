import { getBoundaryProps } from '@repo/util'

import { StackBanner } from '@/feature/rolling/ui'
import {
  ADVANCED_COURSES,
  EMPLOYMENT_SUPPORT_COURSES,
  INITIAL_COURSES,
  PROJECT_COURSES
} from '@/widget/landing/constants'
import { CurriculumScheduleCard } from '@/widget/landing/ui'

export function CurriculumScheduleContents() {
  return (
    <div className='flex w-full flex-col gap-20'>
      <CurriculumScheduleCard
        contents={
          <CurriculumScheduleCard.ContentList>
            {INITIAL_COURSES.map((cardData, index) => {
              const boundaryProps = getBoundaryProps(index, INITIAL_COURSES.length)
              return (
                <CurriculumScheduleCard.List
                  key={index}
                  {...cardData}
                  boundaryProps={boundaryProps}
                />
              )
            })}
          </CurriculumScheduleCard.ContentList>
        }
      />

      <StackBanner />

      <CurriculumScheduleCard
        contents={
          <CurriculumScheduleCard.ContentList>
            {ADVANCED_COURSES.map((cardData, index) => {
              const boundaryProps = getBoundaryProps(index, ADVANCED_COURSES.length)
              return (
                <CurriculumScheduleCard.List
                  key={index}
                  {...cardData}
                  boundaryProps={boundaryProps}
                />
              )
            })}
          </CurriculumScheduleCard.ContentList>
        }
      />

      <CurriculumScheduleCard
        isBackground={false}
        contents={
          <CurriculumScheduleCard.ContentList>
            <CurriculumScheduleCard.List
              {...PROJECT_COURSES}
              boundaryProps={{ isFirst: true, isLast: true, isSingle: true }}
            />
          </CurriculumScheduleCard.ContentList>
        }
      />

      <CurriculumScheduleCard
        isBackground={false}
        contents={
          <CurriculumScheduleCard.ContentList>
            <CurriculumScheduleCard.List
              {...EMPLOYMENT_SUPPORT_COURSES}
              boundaryProps={{ isFirst: true, isLast: true, isSingle: true }}
            />
          </CurriculumScheduleCard.ContentList>
        }
      />
    </div>
  )
}