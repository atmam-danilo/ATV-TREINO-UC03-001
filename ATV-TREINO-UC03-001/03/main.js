let funcionario, vendas, comissao;

funcionario=prompt(" Digite o nome do funcionário.")
vendas=prompt(" Digite o total de vendas.")

comissao=(10*vendas/100);

comissao=alert(` A comissão de ${funcionario} é de R$ ${comissao.toFixed(2)}`)
