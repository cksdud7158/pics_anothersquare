package com.anothersquare.pics;


import org.apache.ibatis.session.SqlSession;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.anothersquare.pics.domain.Customer;
import com.anothersquare.pics.domain.Reserve;


@SpringBootTest
class PicsApplicationTests {
	
	@Autowired
	private SqlSession sqlSession;
	
	@Test
	void contextLoads() {
		Reserve re= sqlSession.selectOne("MainMapper.getReserve","studio1");
		
		System.out.println(re);
	}

}
