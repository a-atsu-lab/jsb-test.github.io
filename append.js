Blockly.JavaScript['foradd'] = function(block) {
  var variable_var1 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var1'), Blockly.Variables.NAME_TYPE);
  var value_foraddini = Blockly.JavaScript.valueToCode(block, 'forAddIni', Blockly.JavaScript.ORDER_ATOMIC);
  var variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var dropdown_logi = block.getFieldValue('logi');
  var value_foraddnum = Blockly.JavaScript.valueToCode(block, 'forAddNum', Blockly.JavaScript.ORDER_ATOMIC);
  var variable_var2 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var2'), Blockly.Variables.NAME_TYPE);
  var statements_foraddstate = Blockly.JavaScript.statementToCode(block, 'forAddState');
  // TODO: Assemble JavaScript into code variable.
  var code = 'for(' + variable_var1 + ' = ' + value_foraddini + '; ' + variable_name + ' ' + dropdown_logi + ' ' + value_foraddnum + '; ' + variable_var2 + '++){\n' + statements_foraddstate + '}\n';
  return code;
};

Blockly.JavaScript['forsub'] = function(block) {
  var variable_var1 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var1'), Blockly.Variables.NAME_TYPE);
  var value_forsubini = Blockly.JavaScript.valueToCode(block, 'forSubIni', Blockly.JavaScript.ORDER_ATOMIC);
  var variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var dropdown_logi = block.getFieldValue('logi');
  var value_forsubnum = Blockly.JavaScript.valueToCode(block, 'forSubBool', Blockly.JavaScript.ORDER_ATOMIC);
  var variable_var2 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var2'), Blockly.Variables.NAME_TYPE);
  var statements_forsubstate = Blockly.JavaScript.statementToCode(block, 'forSubState');
  // TODO: Assemble JavaScript into code variable.
  var code = 'for(' + variable_var1 + ' = ' + value_forsubini + '; ' + variable_name + ' ' + dropdown_logi + ' ' + value_forsubnum + '; ' + variable_var2 + '--){\n' + statements_forsubstate + '}\n';
  return code;
};

Blockly.JavaScript['ifap'] = function(block) {
  var value_ifbool = Blockly.JavaScript.valueToCode(block, 'ifBool', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_ifstate = Blockly.JavaScript.statementToCode(block, 'ifState');
  // TODO: Assemble JavaScript into code variable.
  var code = 'if ' + value_ifbool + '{\n' + statements_ifstate + '}\n';
  return code;
};

Blockly.JavaScript['elifap'] = function(block) {
  var value_elifbool = Blockly.JavaScript.valueToCode(block, 'elifBool', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_elifstate = Blockly.JavaScript.statementToCode(block, 'elifState');
  // TODO: Assemble JavaScript into code variable.
  var code = 'else if ' + value_elifbool + '{\n' + statements_elifstate + '}\n';
  return code;
};

Blockly.JavaScript['elseap'] = function(block) {
  var statements_elsestate = Blockly.JavaScript.statementToCode(block, 'elseState');
  // TODO: Assemble JavaScript into code variable.
  var code = 'else {\n' + statements_elsestate + '}\n';
  return code;
};

Blockly.JavaScript['boolap'] = function(block) {
  var value_var1 = Blockly.JavaScript.valueToCode(block, 'var1', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_comp = block.getFieldValue('comp');
  var value_var2 = Blockly.JavaScript.valueToCode(block, 'var2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_var1　+ ' ' + dropdown_comp + ' ' + value_var2;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['calcap'] = function(block) {
  var value_var1 = Blockly.JavaScript.valueToCode(block, 'var1', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_calc = block.getFieldValue('calc');
  var value_var2 = Blockly.JavaScript.valueToCode(block, 'var2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_var1 + dropdown_calc + value_var2;;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['boolap2'] = function(block) {
  var value_var1 = Blockly.JavaScript.valueToCode(block, 'var1', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_bool2 = block.getFieldValue('bool2');
  var value_var2 = Blockly.JavaScript.valueToCode(block, 'var2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_var1 + ' ' + dropdown_bool2 + ' ' + value_var2;;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
