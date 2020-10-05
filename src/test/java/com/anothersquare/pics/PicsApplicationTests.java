package com.anothersquare.pics;

import java.util.ArrayList;
import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


@SpringBootTest
class PicsApplicationTests {
	
	@Autowired
	private SqlSession sqlSession;
	
	@Test
	void contextLoads() {
		List list = new ArrayList<>();
		list = sqlSession.selectList("CustomerMapper.getCustomer");
		
		System.out.println(list);
	}

}
