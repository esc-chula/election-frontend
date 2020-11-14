import { Button, Checkbox, Divider, Stack, Text } from '@chakra-ui/react'
import Card from 'components/Card'
import Container from 'components/Container'
import PageProgress from 'components/PageProgress'
import React, { useState } from 'react'
import { ButtonLink } from 'components/ButtonLink'
import { ResponsiveStack } from 'components/ResponsiveStack'
import { withAuth } from 'providers/authProvider'
import { usePatchUser } from 'util/hooks'

const textStyles = {
  header: {
    fontSize: ['xl', '2xl'],
    fontWeight: 'regular',
    color: 'mono.6',
  },
  normal: {
    fontSize: ['sm', 'md'],
    fontWeight: 'light',
    color: 'mono.4',
  },
}

const PolicyCard = () => {
  const [checked, setChecked] = useState(false)

  const [loading, onAcceptRule] = usePatchUser(
    'updaterule',
    { ruleAccepted: true },
    '/election',
  )

  return (
    <Stack spacing="20px">
      <Card width={['100%', '335px', '500px']}>
        <Text {...textStyles.header}>กฎและกติกาการเลือกตั้ง</Text>
        <Divider />
        <Text {...textStyles.normal}>
          เพรียวบางไลท์ อุปนายิกาเคลม อะอะเป่ายิ้งฉุบราชบัณฑิตยสถานบรรพชน
          คอร์ปอเรชั่นสไปเดอร์ ชัตเตอร์ ภูมิทัศน์เอสเพรสโซโดมิโนพาร์ทเนอร์
          วอเตอร์สกายมาม่าทอมตอกย้ำ ซะคอลัมนิสต์ พุดดิ้ง
          คอลเล็กชั่นแบคโฮโปรเจ็คท์ ซีเรียสดีกรีมาม่าเมาท์
          ยนตรกรรมมาร์เก็ตติ้งรัม เต๊ะแดนเซอร์ปาสเตอร์โชว์รูมบรรพชน
          เอสเพรสโซโบตั๋นไอซ์ คอร์ปจิ๊กซอว์ บาร์บีคิวโปรเจคท์พุดดิ้ง เซอร์ไพรส์
          เนิร์สเซอรีปิกอัพ เต๊ะ ถ่ายทำอิกัวนารวมมิตร ตะหงิด เซ็นเตอร์ สะกอม
          สโตนอพาร์ทเมนต์โอเพ่นเกมส์ คอร์รัปชัน โปรเจคท์ อริยสงฆ์แฟล็ต
          พาร์ลิมิตแคนูคีตปฏิภาณโบว์ มาร์ชสเตย์สแตนเลส
          ทัวริสต์สตรอเบอรีเพรียวบางพรีเมียร์ทำงาน สจ๊วตนาฏยศาลา
          มหาอุปราชาเก๋ากี้จึ๊กจิ๊กจุ๊ย แบ็กโฮทับซ้อนดีกรี
          แอโรบิคแยมโรลนิรันดร์ดีพาร์ทเมนท์ จึ๊กปฏิสัมพันธ์ อุปทานแชมป์ แจ็กพอต
          ออร์แกนิกคอร์รัปชันเซี้ยว โหงวอาข่าควีนซีน ตู้เซฟม็อบโหงวแดนซ์ก่อนหน้า
          ธุหร่ำผลไม้ เดโมมัฟฟินบ๋อยปิกอัพ คอปเตอร์ เบิร์นฮัลโลวีน มอคคาแบด
          แชมเปี้ยน สปาเอาท์ดอร์มะกันฟินิกซ์ฟอยล์ มาร์ตอาร์พีจีมหาอุปราชา
          แฟกซ์ฟยอร์ดคอมเมนต์รุสโซ ห่วยสามช่าไรเฟิลสเตย์ซีน ทิป
          เกสต์เฮาส์ล้มเหลวเทรดบาลานซ์สติ๊กเกอร์ แล็บเยลลี่ เบิร์นโปรเจ็ค
          ซีอีโอดีพาร์ทเมนต์สป็อตชัวร์ แจ๊กเก็ต
          แคร็กเกอร์โปรเจ็กต์ไคลแมกซ์แชมเปี้ยนรีทัช พันธกิจดีพาร์ทเมนท์รีทัช
          ผ้าห่มแซ็กโมเต็ล ซัพพลายออโต้สป็อตป๋าพงษ์ บัลลาสต์ เปเปอร์ปิโตรเคมี
          หงวนสุนทรีย์สติ๊กเกอร์ฟาสต์ฟู้ด เทรดแหววซิ่ง เสกสรรค์ โซนี่ เซ็นทรัล
          โกเต็กซ์ แคมปัสเวิร์ลด์ชัวร์ เหี่ยวย่น
          เซนเซอร์อิ่มแปร้ยังไงธรรมาภิบาลความหมาย จตุคามดีไซน์ อาร์ติสต์สไปเดอร์
          แหม็บอริยสงฆ์ อพาร์ทเมนต์ โปรโมชั่นแดนเซอร์เช็กภารตะ
          ไฮเวย์มอบตัวบัสซินโดรม แคร็กเกอร์บาร์บี้ฮีโร่แม่ค้าเอ็นเตอร์เทน
          เทรลเลอร์คาแร็คเตอร์ มิลค์โบ้ยวันเวย์ติ่มซำลอร์ด
        </Text>
      </Card>
      <Checkbox
        colorScheme="intaniaRed"
        onChange={(e) => setChecked(e.target.checked)}
        alignSelf="flex-start"
        fontSize="md"
        fontWeight="light"
      >
        ข้าพเจ้ายอมรับกฎและเงื่อนไขการใช้งาน
      </Checkbox>
      <Stack
        direction="row"
        alignSelf="flex-end"
        alignItems="center"
        spacing="16px"
      >
        <ButtonLink
          to="/policy"
          variant="link"
          colorScheme="intaniaRed"
          fontSize="md"
          fontWeight="regular"
        >
          ย้อนกลับ
        </ButtonLink>
        <Button
          isDisabled={!checked}
          colorScheme="intaniaRed"
          bg="intaniaRed.600"
          width="130px"
          fontSize="md"
          fontWeight="regular"
          onClick={onAcceptRule}
          isLoading={loading}
        >
          ขั้นตอนถัดไป
        </Button>
      </Stack>
    </Stack>
  )
}

const Rulepage = () => {
  return (
    <Container padding={['20px', '48px']}>
      <ResponsiveStack spacing={['20px', '0px']}>
        <PageProgress page="rule" />
        <PolicyCard />
      </ResponsiveStack>
    </Container>
  )
}

export default withAuth(Rulepage)
