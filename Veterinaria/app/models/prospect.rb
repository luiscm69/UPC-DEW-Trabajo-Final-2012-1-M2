class Prospect < ActiveRecord::Base
  def image_file=(input_data)
     self.image = input_data.read
  end
end
