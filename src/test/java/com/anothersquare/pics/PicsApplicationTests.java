package com.anothersquare.pics;


import org.apache.ibatis.session.SqlSession;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.anothersquare.pics.domain.Customer;


@SpringBootTest
class PicsApplicationTests {
	
	@Autowired
	private SqlSession sqlSession;
	
	@Test
	void contextLoads() {
		Customer cs = new Customer();
		cs = sqlSession.selectOne("CustomerMapper.getCustomer", "11@test.com");
		
		System.out.println("테스트중입니다.");
		System.out.println(cs);
	}

}
